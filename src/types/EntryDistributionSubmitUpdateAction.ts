
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryDistribution } from './KalturaEntryDistribution';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntryDistributionSubmitUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Submits Entry Distribution changes to the remote destination
**/
export class EntryDistributionSubmitUpdateAction extends KalturaRequest<KalturaEntryDistribution> {

    id : number;

    constructor(data : EntryDistributionSubmitUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaEntryDistribution', responseConstructor : KalturaEntryDistribution  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'contentdistribution_entrydistribution' },
				action : { type : 'c', default : 'submitUpdate' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

