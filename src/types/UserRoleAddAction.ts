
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserRole } from './KalturaUserRole';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserRoleAddActionArgs  extends KalturaRequestArgs {
    userRole : KalturaUserRole;
}

/** 
* Adds a new user role object to the account.
**/
export class UserRoleAddAction extends KalturaRequest<KalturaUserRole> {

    userRole : KalturaUserRole;

    constructor(data : UserRoleAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUserRole', responseConstructor : KalturaUserRole  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'userrole'  },
				action : { type : 'c' , default : 'add'  },
				userRole : { type : 'o'   , fallbackConstructor :  KalturaUserRole, subType : 'KalturaUserRole'}
            }
        );
        return result;
    }
}
