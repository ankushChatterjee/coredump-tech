import { Separator } from "@/components/ui/separator"
import { Badge } from "../ui/badge"

interface LinkCardProps {
    title: string;
    subTitle: string;
    tags: string[];
    linkto: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ title, subTitle, linkto, tags }) =>  (
    <div className="my-4">
        <div className="space-y-1">
            <a href={linkto} className="text-sm font-medium leading-none hover:bg-fuchsia-600">{title}</a>
            <div className="text-sm text-muted-foreground">
                {subTitle} <br/>
            </div>
            {tags.map(tag => <Badge key={tag} variant="secondary" className="mx-0.5">{tag}</Badge>)}
        </div>
        <Separator className="my-4" />
    </div>
)

export default LinkCard