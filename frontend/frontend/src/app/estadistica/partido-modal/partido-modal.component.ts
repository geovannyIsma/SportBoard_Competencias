import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

interface Player {
  name: string;
  color: string;
  position: string;
}

@Component({
  selector: 'app-partido-modal',
  templateUrl: './partido-modal.component.html',
  styleUrls: ['./partido-modal.component.scss']
})
export class PartidoModalComponent {
  team1: { possession: number, goals: number, shots: number, fouls: number, lineup: Player[] };
  team2: { possession: number, goals: number, shots: number, fouls: number, lineup: Player[] };

  constructor(
    public dialogRef: MatDialogRef<PartidoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.team1 = data.team1;
    this.team2 = data.team2;
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}