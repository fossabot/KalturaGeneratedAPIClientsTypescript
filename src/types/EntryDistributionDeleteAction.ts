
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntryDistributionDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Delete Entry Distribution by id
**/
export class EntryDistributionDeleteAction extends KalturaRequest<void> {

    id : number;

    constructor(data : EntryDistributionDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'contentdistribution_entrydistribution' },
				action : { type : 'c', default : 'delete' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

