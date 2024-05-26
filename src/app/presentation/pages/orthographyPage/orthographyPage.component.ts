import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { GptMessageComponent, MyMessageComponent, TextMessageBoxComponent, TypingLoaderComponent,TextMessageBoxFileComponent, TextMessageEvent, TextMessageBoxSelectComponent, TextMessageBoxEvent } from '@components/index';
import { Message } from '@interfaces/index';
import { OpenIAService } from '@services/index';

@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [
    CommonModule,
    GptMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
  ],
  templateUrl: './orthographyPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPageComponent {

  protected messages = signal<Message[]>([{text: 'Hola mundo', isGpt: false}]);
  protected isLoading = signal<boolean>(false);
  protected openIaService: OpenIAService = inject(OpenIAService);

  protected handleMessage(promt: string): void {
    console.log(promt);
  }
  // protected handleMessageWithFile({ prompt, file }: TextMessageEvent): void {
  //   console.log({ prompt, file });
  // }
  // protected handleMessageWithSelect($event: TextMessageBoxEvent) {
  //   throw new Error('Method not implemented.');
  // }
}