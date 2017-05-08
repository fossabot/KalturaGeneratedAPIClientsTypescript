
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPermissionItem } from './KalturaPermissionItem';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PermissionItemUpdateActionArgs  extends KalturaRequestArgs {
    permissionItemId : number;
	permissionItem : KalturaPermissionItem;
}

/** 
* Updates an existing permission item object.   This action is available only to
* Kaltura system administrators.
**/
export class PermissionItemUpdateAction extends KalturaRequest<KalturaPermissionItem> {

    permissionItemId : number;
	permissionItem : KalturaPermissionItem;

    constructor(data : PermissionItemUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPermissionItem', responseConstructor : KalturaPermissionItem  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'permissionitem' },
				action : { type : 'c', default : 'update' },
				permissionItemId : { type : 'n' },
				permissionItem : { type : 'o', subTypeConstructor : KalturaPermissionItem, subType : 'KalturaPermissionItem' }
            }
        );
        return result;
    }
}

