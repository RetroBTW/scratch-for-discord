import * as Blockly from "blockly/core";

const blockName = "new_invite";

const blockData = {

  "message0": "Create invite for channel  %1  then %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "channel",
      "Check": "Channel"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "then",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#520991",
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
    const Then = Blockly.JavaScript.statementToCode(block, "then");
const channel = Blockly.JavaScript.valueToCode(block, "channel", Blockly.JavaScript.ORDER_ATOMIC);
  const code =  `${channel}.createInvite({ maxAge: 0, maxUses: 0 }).then(async invite => { \n ${Then} \n });`;
  return code;
};
