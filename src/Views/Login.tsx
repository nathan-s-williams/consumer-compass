// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import laptop from "../assets/analysis-laptop-business.jpg";

function HomePage() {
    return (
        <div className="flex flex-col items-center">
            <Card className="my-10 h-[700px] min-w-[1045px] max-w-[1300px] w-[90%]">
                <CardHeader className="z-10">

                </CardHeader>
                <Image
                    removeWrapper
                    alt="Dashboard on laptop screen"
                    className="z-0 w-full h-full object-cover"
                    src={laptop}
                />
            </Card>
            {/*<div className="absolute left-[10%] top-32 flex flex-col min-w-[235px] font-roboto">*/}
            {/*    <p className="text-[3vw] font-medium">*/}
            {/*        Easy,<br/>*/}
            {/*        Understandable*/}
            {/*    </p>*/}
            {/*    <p className="text-[5vw] font-medium">Dashboards</p>*/}
            {/*</div>*/}
            <Card className="absolute left-[10%] top-32 flex flex-col min-w-[235px] font-roboto">
                <p className="text-[3vw] font-medium">
                    Easy,<br/>
                    Understandable
                </p>
                <p className="text-[5vw] font-medium">Dashboards</p>
            </Card>
            <div className="h-screen">
                <div className="flex flex-col gap-3 font-roboto">
                    <p className="text-2xl font-medium">Market Research that Makes Sense</p>
                </div>
                <div className="w-2/5">
                    <h1 className="text-4xl">Navigate to Success</h1>
                    <i className="text-xl">by taking your business to the next level!</i><br/><br/>
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
        </div>
    );
}

export default HomePage;