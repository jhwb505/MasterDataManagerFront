'use client'

import {Button, Card, CardBody, CardFooter, CardHeader, Divider } from "@heroui/react";
import Link from "next/link";

type Props = {
  topicName: string;
  description?: string;
  path: string;
}

const Topic:React.FC<Props> = ({topicName,description,path}) => {

  return (
    <Card className="max-w-[300px]">

      <CardHeader className="flex gap-3 bg-blue-600">
        <div className="flex flex-col">
          <p className="text-md text-white">{topicName}</p>
        </div>
      </CardHeader>

      <Divider />
      <CardBody>
        <p>{description}</p>
      </CardBody>
      <Divider />

      <CardFooter className="justify-end">
        <Link href={path}>
          <Button color="primary">SHOW MORE</Button>
        </Link>
      </CardFooter>

    </Card>
  )
}

export default Topic;