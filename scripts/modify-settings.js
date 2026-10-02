return {
    result: 0,
    "settings": {
        "formId": "swiss-backup-modify",
        "formCfg": {
            "fields": [
                {
                    "type": "compositefield",
                    "hideLabel": true,
                    "pack": "center",
                    "name": "wp_title",
                    "items": [{
                        "type": "displayfield",
                        "cls": "x-item-disabled",
                        "value": "<h3>Backup configuration</h3>",
                    }]
                },
                {
                    "name": "choice",
                    "type": "radio-fieldset",
                    "values": [{
                            "value": "full",
                            "caption": "Back up all files"
                        },
                        {
                            "value": "folder",
                            "caption": "Back up specific folders"
                        }
                    ],
                    "default": "full",
                    "showIf": {
                        "full": [{
                            "type": "displayfield",
                            "cls": "x-item-disabled",
                            "markup": "Some system files will be excluded. See our FAQ <a target='_blank' href='https://faq.infomaniak.com/2420'>Add-on SwissBackup</a> for more detail.",
                            "name": "info",
                            "hidden": false
                        }],
                        "folder": [{
                            "name": "path",
                            "caption": "Folders to back up",
                            "regex": "[^s/ *]",
                            "regexText": "Use Snapshot of the whole container button for backup / ",
                            "type": "string",
                            "placeholder": "path/to/folder1/, path/to/folder2/, path/to/folderX"
                        }]
                    }
                },
                {
                    "pack": "",
                    "align": "",
                    "defaultMargins": {
                        "top": 0,
                        "right": 0,
                        "bottom": 0,
                        "left": 20
                    },
                    "defaultPadding": 0,
                    "defaultFlex": 0,
                    "caption": "Retention period",
                    "tooltip": "See our FAQ <a target='_blank' href='https://faq.infomaniak.com/2420'>Add-on SwissBackup</a> section backup retention",
                    "hideLabel": false,
                    "type": "compositefield",
                    "name": "compositefield",
                    "hidden": false,
                    "items": [{
                            "type": "displayfield",
                            "height": 5,
                            "hideLabel": true,
                            "markup": "Years"
                        },
                        {
                            "width": 37,
                            "name": "year",
                            "regex": "^[0-1]",
                            "regexText": "0-1",
                            "type": "string",
                            "default": "0",
                            "required": "true",
                            "hidden": false
                        },
                        {
                            "type": "displayfield",
                            "height": 5,
                            "hideLabel": true,
                            "markup": "Months"
                        },
                        {
                            "width": 37,
                            "name": "month",
                            "regex": "^(1[0-2]|[0-9])$",
                            "regexText": "0-12",
                            "type": "string",
                            "default": "0",
                            "required": "true",
                            "hidden": false
                        },
                        {
                            "type": "displayfield",
                            "height": 5,
                            "hideLabel": true,
                            "markup": "Days"
                        },
                        {
                            "width": 37,
                            "name": "day",
                            "regex": "^[1-9][0-9]?$",
                            "regexText": "1-99",
                            "type": "string",
                            "default": "7",
                            "required": "true",
                            "hidden": false
                        }
                    ]
                },
                {
                    "type": "list",
                    "name": "sauvegarde",
                    "caption": "Backup frequency",
                    "tooltip": "See our FAQ <a target='_blank' href='https://faq.infomaniak.com/2420'>Add-on SwissBackup</a> section backup frequency",
                    "values": {
                        "daily": "Daily",
                        "hourly": "Hourly"
                    },
                    "hideLabel": false,
                    "hidden": false,
                    "editable": false,
                    "default": "daily",
                    "required": true
                }
            ]
        }
    }
}
