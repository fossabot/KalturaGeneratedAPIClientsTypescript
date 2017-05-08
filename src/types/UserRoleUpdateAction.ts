
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserRole } from './KalturaUserRole';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserRoleUpdateActionArgs  extends KalturaRequestArgs {
    userRoleId : number;
	userRole : KalturaUserRole;
}

/** 
* Updates an existing user role object.
**/
export class UserRoleUpdateAction extends KalturaRequest<KalturaUserRole> {

    userRoleId : number;
	userRole : KalturaUserRole;

    constructor(data : UserRoleUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUserRole', responseConstructor : KalturaUserRole  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'userrole' },
				action : { type : 'c', default : 'update' },
				userRoleId : { type : 'n' },
				userRole : { type : 'o', subTypeConstructor : KalturaUserRole, subType : 'KalturaUserRole' }
            }
        );
        return result;
    }
}

