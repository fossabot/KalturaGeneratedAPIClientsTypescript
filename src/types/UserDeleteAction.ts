
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUser } from './KalturaUser';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserDeleteActionArgs  extends KalturaRequestArgs {
    userId : string;
}

/** 
* Deletes a user from a partner account.
**/
export class UserDeleteAction extends KalturaRequest<KalturaUser> {

    userId : string;

    constructor(data : UserDeleteActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUser', responseConstructor : KalturaUser  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'user' },
				action : { type : 'c', default : 'delete' },
				userId : { type : 's' }
            }
        );
        return result;
    }
}

