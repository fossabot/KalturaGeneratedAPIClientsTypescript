
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';

import { KalturaBaseEntryCloneOptionItem } from './KalturaBaseEntryCloneOptionItem';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BaseEntryCloneActionArgs  extends KalturaRequestArgs {
    entryId : string;
	cloneOptions? : KalturaBaseEntryCloneOptionItem[];
}

/** 
* Clone an entry with optional attributes to apply to the clone
**/
export class BaseEntryCloneAction extends KalturaRequest<KalturaBaseEntry> {

    entryId : string;
	cloneOptions : KalturaBaseEntryCloneOptionItem[];

    constructor(data : BaseEntryCloneActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBaseEntry', responseConstructor : KalturaBaseEntry  });
        if (typeof this.cloneOptions === 'undefined') this.cloneOptions = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'baseentry'  },
				action : { type : 'c' , default : 'clone'  },
				entryId : { type : 's'   },
				cloneOptions : { type : 'a'   , fallbackConstructor :  KalturaBaseEntryCloneOptionItem, subType : 'KalturaBaseEntryCloneOptionItem'}
            }
        );
        return result;
    }
}
