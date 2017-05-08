
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ExternalMediaDeleteActionArgs  extends KalturaRequestArgs {
    id : string;
}

/** 
* Delete a external media entry.
**/
export class ExternalMediaDeleteAction extends KalturaRequest<void> {

    id : string;

    constructor(data : ExternalMediaDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'externalmedia_externalmedia' },
				action : { type : 'c', default : 'delete' },
				id : { type : 's' }
            }
        );
        return result;
    }
}

