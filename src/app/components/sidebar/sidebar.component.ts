import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../../environments/environment';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


declare var $: any;



class FoodNode {
  name: string;
  children?: FoodNode[];
  id?: number
}

const TREE_DATA: FoodNode[] = [
  // {
  //   name: 'Fruit',
  //   children: [
  //     {name: 'Apple'},
  //     {name: 'Banana'},
  //     {name: 'Fruit loops'},
  //   ]
  // }, {
  //   name: 'Vegetables',
  //   children: [
  //     {
  //       name: 'Green',
  //       children: [
  //         {name: 'Broccoli'},
  //         {name: 'Brussels sprouts'},
  //       ]
  //     }, {
  //       name: 'Orange',
  //       children: [
  //         {name: 'Pumpkins'},
  //         {name: 'Carrots'},
  //       ]
  //     },
  //   ]
  // },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})




export class SidebarComponent implements OnInit, AfterViewInit {

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      id: node.id
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;



  @ViewChild('tree') tree: ElementRef;
  @ViewChild('treeValues') treeValues: ElementRef;

  public div: string;
  public categories: Array<any>;
  public subCategories: Array<any>;
  constructor(private httpClient: HttpClient, private router: Router, private translate: TranslateService) {
    var idLanguage = localStorage.getItem('idLanguage');
    switch (idLanguage?.toString()) {
      case '1':
        this.translate.use('tr');
        break;
      case '2':
        this.translate.use('en');
        break;
      case '3':
        this.translate.use('de');
        break;
      default:
        this.translate.use('tr');
        break;
    }

    if (idLanguage == '0' || idLanguage == undefined || idLanguage == null || idLanguage == 'undefined') {
      idLanguage = '1'
    }
    this.httpClient.get<any>(environment.APIEndpoint + "Site/GetTree?idLanguage=" + idLanguage).subscribe((response) => {
      response.forEach(element => {
        var tmpSubCategories = new Array<FoodNode>()
        TREE_DATA.push({
          id: element.id,
          name: element.name,
          children: this.getChildren(element),
        },
        )
      });
      this.dataSource.data = TREE_DATA;
    })

  }
  ngAfterViewInit() {
    $('#treeValues').html();
    console.log(this.treeValues.nativeElement.innerHTML);
  }


  ngOnInit(): void {
  }

  getChildren(element: any) {
    var tmpSubCategories = new Array<FoodNode>()
    element.subCategories?.forEach(element2 => {
      var tmp = new FoodNode();
      tmp.id = element2.id;
      tmp.name = element2.name;
      tmpSubCategories.push(tmp);
      tmp.children = new Array<FoodNode>()
      element2.productGroups.forEach(element3 => {
        var tmp2 = new FoodNode();
        tmp2.id = element3.id;
        tmp2.name = element3.name;
        tmp.children.push(tmp2);
      });




    })
    return tmpSubCategories;
  }


  // GoProductGroupPage(node : any){
  // if (node.level == 2) {

  //   this.router.navigate(['/show_alunos'])
  // }
  //  
  // }



  // GetSubCategories(idCategory: number){
  //   this.httpClient.get<any>(environment.APIEndpoint + "Site/GetSubCategories?idCategory="+idCategory).subscribe((response) => {
  //     this.subCategories = response;
  //   });
  // }

}
