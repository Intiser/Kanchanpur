import { Component, OnInit } from '@angular/core';
import { FamilyDataService } from '../../services/family-data.service';
import { Person } from '../../models/person.model';

interface TreeNode {
  id: string;
  name: string;
  image?: string;
  children?: TreeNode[];
  collapsed?: boolean;
}

@Component({
    selector: 'app-family-tree',
    templateUrl: './family-tree.component.html',
    standalone: false
})
export class FamilyTreeComponent implements OnInit {
  treeData: TreeNode | null = null;
  selectedPerson: Person | null = null;
  isModalOpen = false;
  
  constructor(private familyDataService: FamilyDataService) {}
  
  ngOnInit() {
    // In a real implementation, we would build a proper tree structure
    // based on parent-child relationships. For now, we'll create a 
    // simplified version for demonstration purposes.
    
    this.familyDataService.getAllPeople().subscribe(people => {
      // This is a simplified tree structure
      this.treeData = {
        id: 'hazrat-shah-miran',
        name: 'Hazrat Shah Miran',
        children: [
          {
            id: 'generation-2',
            name: 'Generation 2',
            children: [
              {
                id: 'generation-3',
                name: 'Generation 3',
                children: [
                  {
                    id: 'golam-ahmed-chowdhury',
                    name: 'Golam Ahmed Chowdhury',
                    children: [
                      {
                        id: 'rashed-ahmed-chowdhury',
                        name: 'Rashed Ahmed Chowdhury',
                        children: [
                          {
                            id: 'mutaher-hossain-chowdhury',
                            name: 'Mutaher Hossain Chowdhury',
                            children: [
                              {
                                id: 'syed-abun-nur-chowdhury',
                                name: 'Syed Abun Nur Chowdhury'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      };
    });
  }
  
  toggleCollapse(node: TreeNode) {
    node.collapsed = !node.collapsed;
  }
  
  viewPersonDetails(id: string) {
    this.familyDataService.getPersonById(id).subscribe(person => {
      if (person) {
        this.selectedPerson = person;
        this.isModalOpen = true;
      }
    });
  }
  
  closeModal() {
    this.isModalOpen = false;
  }
}