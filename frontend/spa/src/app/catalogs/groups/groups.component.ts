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
        id: 0,
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
}
