
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionParams } from './KalturaCaptionParams';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CaptionParamsGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Get Caption Params by ID
**/
export class CaptionParamsGetAction extends KalturaRequest<KalturaCaptionParams> {

    id : number;

    constructor(data : CaptionParamsGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCaptionParams', responseConstructor : KalturaCaptionParams  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'caption_captionparams' },
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

