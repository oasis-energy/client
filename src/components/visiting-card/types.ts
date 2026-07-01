export interface CardData {
  name: string;
  role: string;
  phone: string;
  email: string;
  website: string;
  socialHandle: string;
}

export interface VisitingCardProps {
  side: "front" | "back";
  className?: string;
  id?: string;
  data: CardData;
}
