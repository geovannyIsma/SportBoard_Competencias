import { Component, OnInit } from '@angular/core';
import { Group } from '../../models/catalogs/group.model';
import { GroupService } from '../../services/catalogs/group.service';

@Component({
    selector: 'app-groups',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.scss'],
})
export class GroupsComponent implements OnInit {
    groups: Group[] = [];
    selectedGroup: Group | null = null;
    newGroup: Group = {
        code: '',
        name: '',
    };

    constructor(private groupService: GroupService) {}

    ngOnInit(): void {
        this.loadGroups();
    }

    loadGroups(): void {
        this.groupService.getAllGroups().subscribe((data: Group[]) => {
            this.groups = data;
        });
    }

    selectGroup(group: Group): void {
        this.selectedGroup = { ...group };
    }

    deleteGroup(group: Group): void {
        this.groupService.deleteGroup(group.code).subscribe(() => {
            this.loadGroups();
        });
    }

    viewGroup(group: Group): void {
        // Implementar la lógica para ver el grupo
        console.log('Ver grupo:', group);
    }
}
