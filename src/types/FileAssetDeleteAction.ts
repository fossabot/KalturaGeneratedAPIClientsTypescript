
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FileAssetDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Delete file asset by id
**/
export class FileAssetDeleteAction extends KalturaRequest<void> {

    id : number;

    constructor(data : FileAssetDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'fileasset' },
				action : { type : 'c', default : 'delete' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

