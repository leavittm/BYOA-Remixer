export type RemixStyle = {
  id: string;
  name: string;
  description: string;
};

export type RemixFormData = {
  style: string;
  sourceText: string;
};

export type RemixResult = {
  originalText: string;
  remixedText: string;
  style: string;
}; 