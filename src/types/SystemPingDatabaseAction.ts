
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SystemPingDatabaseActionArgs  extends KalturaRequestArgs {
    
}


export class SystemPingDatabaseAction extends KalturaRequest<boolean> {

    

    constructor(data? : SystemPingDatabaseActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'system'  },
				action : { type : 'c' , default : 'pingDatabase'  }
            }
        );
        return result;
    }
}
