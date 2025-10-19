export interface Note {
    id: string;
    tag: string;
    title: string;
    content: string;
}

export interface NoteFormData {
  title: string;
  content: string;
  tag: string;
}