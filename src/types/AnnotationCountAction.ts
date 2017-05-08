
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaCuePointFilter } from './KalturaCuePointFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AnnotationCountActionArgs  extends KalturaRequestArgs {
    filter? : KalturaCuePointFilter;
}

/** 
* count cue point objects by filter
**/
export class AnnotationCountAction extends KalturaRequest<number> {

    filter : KalturaCuePointFilter;

    constructor(data? : AnnotationCountActionArgs)
    {
        super(data, {responseType : 'n', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'annotation_annotation'  },
				action : { type : 'c' , default : 'count'  },
				filter : { type : 'o'   , fallbackConstructor :  KalturaCuePointFilter, subType : 'KalturaCuePointFilter'}
            }
        );
        return result;
    }
}
