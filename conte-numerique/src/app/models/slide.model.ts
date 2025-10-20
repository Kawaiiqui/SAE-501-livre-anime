export interface TextElement {
  content: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  style?: {
    fontSize?: string;
    color?: string;
    fontWeight?: string;
    textAlign?: string;
    backgroundColor?: string;
    padding?: string;
    borderRadius?: string;
    maxWidth?: string;
  };
}

export interface Slide {
  id: number;
  title: string;
  imageUrl: string;
  textElements: TextElement[];
  backgroundColor?: string;
}