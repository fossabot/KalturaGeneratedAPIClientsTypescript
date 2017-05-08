
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEmailIngestionProfile } from './KalturaEmailIngestionProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EmailIngestionProfileGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Retrieve a EmailIngestionProfile by id
**/
export class EmailIngestionProfileGetAction extends KalturaRequest<KalturaEmailIngestionProfile> {

    id : number;

    constructor(data : EmailIngestionProfileGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaEmailIngestionProfile', responseConstructor : KalturaEmailIngestionProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'emailingestionprofile' },
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

