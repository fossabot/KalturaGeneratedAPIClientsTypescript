
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSessionResponse } from './KalturaSessionResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserLoginByKsActionArgs  extends KalturaRequestArgs {
    requestedPartnerId : number;
}

/** 
* Loges a user to the destination account as long the ks user id exists in the
* desc acount and the loginData id match for both accounts
**/
export class UserLoginByKsAction extends KalturaRequest<KalturaSessionResponse> {

    requestedPartnerId : number;

    constructor(data : UserLoginByKsActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSessionResponse', responseConstructor : KalturaSessionResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'user' },
				action : { type : 'c', default : 'loginByKs' },
				requestedPartnerId : { type : 'n' }
            }
        );
        return result;
    }
}

