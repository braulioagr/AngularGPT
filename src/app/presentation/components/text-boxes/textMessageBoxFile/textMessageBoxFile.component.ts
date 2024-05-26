import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';


export interface TextMessageEvent {
  file: File;
  prompt?: string  | null;
}

@Component({
  selector: 'app-text-message-box-file',
  standalone: true,
  imports: [ 
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './textMessageBoxFile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextMessageBoxFileComponent {
  @Input() public placeholder: string = '';

  @Output() public onMessage: EventEmitter<TextMessageEvent> = new EventEmitter<TextMessageEvent>();

  public fb = inject(FormBuilder);
  public form = this.fb.group({
    prompt: [],
    file: [null, Validators.required]
  });

  public file: File | undefined;

  public handleSelectedFile(event: any): void {
    const file = event.target.files.item(0);
    this.form.controls.file.setValue(file);    
  }

  protected handleSubmit(): void {
    if (!this.form.valid) {
      return;
    }
    const { prompt, file } = this.form.value;
    this.onMessage.emit({prompt, file: file!});
    this.form.reset();
  }
}
