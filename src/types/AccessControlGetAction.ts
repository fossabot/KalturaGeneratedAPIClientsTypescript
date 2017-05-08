
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAccessControl } from './KalturaAccessControl';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AccessControlGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Get Access Control Profile by id
**/
export class AccessControlGetAction extends KalturaRequest<KalturaAccessControl> {

    id : number;

    constructor(data : AccessControlGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAccessControl', responseConstructor : KalturaAccessControl  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'accesscontrol' },
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

