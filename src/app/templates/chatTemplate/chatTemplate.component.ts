import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { GptMessageComponent, MyMessageComponent, TypingLoaderComponent, TextMessageBoxComponent, TextMessageBoxFileComponent, TextMessageBoxSelectComponent, TextMessageBoxEvent, TextMessageEvent } from '@components/index';
import { Message } from '@interfaces/index';
import { OpenIAService } from '@services/openia.service';

@Component({
  selector: 'app-chat-template',
  standalone: true,
  imports: [
    CommonModule,
    GptMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
    TextMessageBoxFileComponent,
    TextMessageBoxSelectComponent
  ],
  templateUrl: './chatTemplate.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatTemplateComponent {
  protected messages = signal<Message[]>([{text: 'Hola mundo', isGpt: false}]);
  protected isLoading = signal<boolean>(false);
  protected openIaService: OpenIAService = inject(OpenIAService);

  protected handleMessage(promt: string): void {
    console.log(promt);
  }
  protected handleMessageWithFile({ prompt, file }: TextMessageEvent): void {
    console.log({ prompt, file });
  }
  protected handleMessageWithSelect($event: TextMessageBoxEvent) {
    throw new Error('Method not implemented.');
  }
}