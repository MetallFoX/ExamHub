import React from 'react';
import PropTypes from 'prop-types';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import 'swagger-editor/swagger-editor.css';

import MonacoPreset from 'swagger-editor/presets/monaco';

const SwaggerEditor = React.memo(
    ({
         spec = ""
     }) => (
        <div className="swagger-editor">
            <SwaggerUI
                spec={spec}
                layout="SwaggerEditorLayout"
                presets={[MonacoPreset]}
                tryItOutEnabled={false}
            />
        </div>
    )
);


SwaggerEditor.propTypes = {
    spec: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default SwaggerEditor;
