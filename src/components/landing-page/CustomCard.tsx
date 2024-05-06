import { ComponentProps } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { cn } from "@/lib/utils";

type CardProps = ComponentProps<typeof Card>;

type CustomCardProps = {
    cardHeader?: React.ReactNode;
    cardContent?: React.ReactNode;
    cardFooter?: React.ReactNode;
} & CardProps;


const CustomCard = ({
    className,
    cardHeader,
    cardContent,
    cardFooter,
    ...props
}: CustomCardProps) => {
  return (
    <Card className={cn('w-[380px]', className) } {...props}>

        <CardHeader>{cardHeader}</CardHeader>
        <CardContent className="grid gap-4">{cardContent}</CardContent>
        <CardFooter>{cardFooter}</CardFooter>
    </Card>
  )
}

export default CustomCard