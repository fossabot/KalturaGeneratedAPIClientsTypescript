
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BaseEntryUpdateThumbnailFromSourceEntryActionArgs  extends KalturaRequestArgs {
    entryId : string;
	sourceEntryId : string;
	timeOffset : number;
}

/** 
* Update entry thumbnail from a different entry by a specified time offset (in
* seconds).
**/
export class BaseEntryUpdateThumbnailFromSourceEntryAction extends KalturaRequest<KalturaBaseEntry> {

    entryId : string;
	sourceEntryId : string;
	timeOffset : number;

    constructor(data : BaseEntryUpdateThumbnailFromSourceEntryActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBaseEntry', responseConstructor : KalturaBaseEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'baseentry' },
				action : { type : 'c', default : 'updateThumbnailFromSourceEntry' },
				entryId : { type : 's' },
				sourceEntryId : { type : 's' },
				timeOffset : { type : 'n' }
            }
        );
        return result;
    }
}

