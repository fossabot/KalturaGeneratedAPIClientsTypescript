
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MetadataIndexActionArgs  extends KalturaRequestArgs {
    id : string;
	shouldUpdate : boolean;
}

/** 
* Index metadata by id, will also index the related object
**/
export class MetadataIndexAction extends KalturaRequest<number> {

    id : string;
	shouldUpdate : boolean;

    constructor(data : MetadataIndexActionArgs)
    {
        super(data, {responseType : 'n', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'metadata_metadata' },
				action : { type : 'c', default : 'index' },
				id : { type : 's' },
				shouldUpdate : { type : 'b' }
            }
        );
        return result;
    }
}

