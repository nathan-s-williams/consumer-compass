// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";
import laptop from "../assets/analysis-laptop-business.jpg";

function HomePage() {
    return (
        <>
            <Card>
                <CardBody>

                </CardBody>
                <Image
                    removeWrapper
                    alt="Dashboard on laptop screen"
                    className="z-0 w-full h-full object-cover"
                    src={ laptop }
                />
            </Card>
            <div className="h-screen">
                <div className="flex flex-col gap-3 font-roboto">
                    <p className="text-2xl font-medium">Easy, Understandable</p>
                    <p className="text-6xl font-medium">Dashboards</p>
                    <p className="text-2xl font-medium">Market Research that Makes Sense</p>
                </div>
                <div className="w-2/5">
                    <h1 className="text-4xl">Navigate to Success</h1>
                    <i className="text-xl">by taking your business to the next level!</i><br /><br />
                    <p>
                        Our dynamic dashboards will help you gain the insight you need to understand
                        your customers. Simply upload your
                        sales data and start generating your personalized dashboard... your way. Pick and choose
                        the elements you want to see and reorganize them to get the perfect view of your data.
                        
                    </p>
                    <p>
                        Feeling nervous about making decisions from complicated charts and graphs?
                        Don't! We have specialized AI Assistants that will help you understand the
                        small stuff so you can focus on the big picture.
                    </p>
                </div>
            </div>
            {/*<div className="relative h-screen bg-light-soft-blue">*/}
            {/*    <Card className="absolute left-1/4 bottom-[-70%] h-96 w-[700px]">*/}
            {/*        <CardBody>*/}
            {/*            <h1>Welcome to <i>Consumer Compass</i>!</h1>*/}
            {/*        </CardBody>*/}
            {/*    </Card>*/}
            {/*</div>*/}
        </>
    );
}

export default HomePage;