
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryEntrySyncPrivacyContextActionArgs  extends KalturaRequestArgs {
    entryId : string;
	categoryId : number;
}

/** 
* update privacy context from the category
**/
export class CategoryEntrySyncPrivacyContextAction extends KalturaRequest<void> {

    entryId : string;
	categoryId : number;

    constructor(data : CategoryEntrySyncPrivacyContextActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'categoryentry'  },
				action : { type : 'c' , default : 'syncPrivacyContext'  },
				entryId : { type : 's'   },
				categoryId : { type : 'n'   }
            }
        );
        return result;
    }
}
