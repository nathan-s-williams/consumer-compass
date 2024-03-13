import { Card, CardBody } from "@nextui-org/react";

function HomePage() {
    return (
        <>
            <div className="h-screen">
                <div>
                    Easy
                    Understandable
                    Dashboards
                    Market Research that Makes Sense
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