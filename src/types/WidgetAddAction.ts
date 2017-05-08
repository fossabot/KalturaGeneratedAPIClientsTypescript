
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaWidget } from './KalturaWidget';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface WidgetAddActionArgs  extends KalturaRequestArgs {
    widget : KalturaWidget;
}

/** 
* Add new widget, can be attached to entry or kshow   SourceWidget is ignored.
**/
export class WidgetAddAction extends KalturaRequest<KalturaWidget> {

    widget : KalturaWidget;

    constructor(data : WidgetAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaWidget', responseConstructor : KalturaWidget  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'widget' },
				action : { type : 'c', default : 'add' },
				widget : { type : 'o', subTypeConstructor : KalturaWidget, subType : 'KalturaWidget' }
            }
        );
        return result;
    }
}

