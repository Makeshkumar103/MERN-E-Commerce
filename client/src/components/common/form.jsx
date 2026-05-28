import { Label } from "radix-ui";
import { SelectContent, SelectTrigger } from "../ui/select";
import { Textarea } from "../ui/textarea";

const types = {

}

function CommonForm(formControls) {

    function renderInputByComponentType(getControlItem){
        let element = null;
        switch (getControlItem.componentType){
            case 'input':
                element = <Input 
                name={getControlItem.name}
                placeholder={getControlItem.placeholder}
                id={getControlItem.name}
                type={getControlItem.type}
                />

                break;

            case 'select':
                element = (
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder={getControlItem.placeholder}></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                        {
                            getControlItem.opitions &&
                            getControlItem.opitions.length > 0 ?
                            getControlItem.opitions.map(optionItem=> <SelectItem key={optionItem.id} value={optionItem.id}>{optionItem.label}</SelectItem>): null
                        }
                    </SelectContent>
                </Select>
                 );

                break;    
            
            case 'textarea':
                element = (
                <Textarea
                name={getControlItem.name}
                placeholder = {getControlItem.placeholder}
                id= {getControlItem.id}
                />
                );

                break;    



             default:
                element = (<Input 
                name={getControlItem.name}
                placeholder={getControlItem.placeholder}
                id={getControlItem.name}
                type={getControlItem.type}
                />
                );

                break;
        }
            return element
    }

    return( 
        <form>
            <div className="flex flex-col gap-3">
                {
                    formControls.map(controlItem => 
                    <div className="grid w-full gap-1.5" key={controlItem.key}>
                        <Label className='mb-1'>{controlItem.label}</Label>
                        {
                          renderInputByComponentType(controlItem)  
                        }
                    </div>)
                }
            </div>
        </form>
    )
}



export default CommonForm;