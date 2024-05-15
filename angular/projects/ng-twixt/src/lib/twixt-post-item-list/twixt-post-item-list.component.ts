import { Component, Input } from '@angular/core';

interface Items{
  name :string,
  postedOn :string,
  imageUrl :string,
  content :string,
  likeCount :number,
  commentCount :number,
}

@Component({
  selector: 'app-post-item-list',
  standalone: true,
  imports: [],
  templateUrl: './twixt-post-item-list.component.html',
  styleUrl: './twixt-post-item-list.component.css'
})
export class TwixtPostItemListComponent {
  items: Items[]=[];
}

