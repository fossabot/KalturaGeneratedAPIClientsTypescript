
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbParams } from './KalturaThumbParams';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ThumbParamsGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Get Thumb Params by ID
**/
export class ThumbParamsGetAction extends KalturaRequest<KalturaThumbParams> {

    id : number;

    constructor(data : ThumbParamsGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaThumbParams', responseConstructor : KalturaThumbParams  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'thumbparams' },
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

