
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryUserCopyFromCategoryActionArgs  extends KalturaRequestArgs {
    categoryId : number;
}

/** 
* Copy all memeber from parent category
**/
export class CategoryUserCopyFromCategoryAction extends KalturaRequest<void> {

    categoryId : number;

    constructor(data : CategoryUserCopyFromCategoryActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'categoryuser' },
				action : { type : 'c', default : 'copyFromCategory' },
				categoryId : { type : 'n' }
            }
        );
        return result;
    }
}

