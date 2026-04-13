import Workitem from "./workitem";
export default function Done (){
    return (
        <>
            <div className="flex flex-col gap-10">
                <Workitem></Workitem>

                <div className="grid lg:grid-cols-2 gap-10">
                    <div>
                        <Workitem></Workitem>
                    </div>
                    <div>
                        <Workitem></Workitem>
                    </div>
                    <div>
                        <Workitem></Workitem>
                    </div>
                    <div>
                        <Workitem></Workitem>
                    </div>
                </div>
            </div>
            
        </>
    );
};