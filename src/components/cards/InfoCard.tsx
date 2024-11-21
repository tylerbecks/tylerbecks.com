import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

interface Props {
  description?: string;
  href: string;
  image: string;
  subtitle: string;
  title: string;
}

export const CARD_WIDTH = 320; // Width of each card in pixels

export default function CompanyCard({
  description,
  href,
  image,
  subtitle,
  title,
}: Props) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Card className="max-w-xs min-w-xs">
        <CardHeader>
          <div className="flex gap-2">
            <img src={image} alt={title} className="h-12 w-12 rounded-lg" />
            <div className="gap-1 flex flex-col">
              <CardTitle>{title}</CardTitle>
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {description && <CardDescription>{description}</CardDescription>}
        </CardContent>
      </Card>
    </a>
  );
}
