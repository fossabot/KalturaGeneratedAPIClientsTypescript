
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaStorageProfileStatus } from './KalturaStorageProfileStatus';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface StorageProfileUpdateStatusActionArgs  extends KalturaRequestArgs {
    storageId : number;
	status : KalturaStorageProfileStatus;
}


export class StorageProfileUpdateStatusAction extends KalturaRequest<void> {

    storageId : number;
	status : KalturaStorageProfileStatus;

    constructor(data : StorageProfileUpdateStatusActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'storageprofile'  },
				action : { type : 'c' , default : 'updateStatus'  },
				storageId : { type : 'n'   },
				status : { type : 'en'   , subType : 'KalturaStorageProfileStatus'}
            }
        );
        return result;
    }
}
