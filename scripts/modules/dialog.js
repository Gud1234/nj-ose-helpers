export const registerDialog = () => {
  NJH.dialog = NJH.dialog || {};

  const accommodation = function () {
    return `
          <div style="padding: 5px 0 0 10px; font-weight: bold;">Accommodation</div>
          <div style="padding: 5px 0 0 10px;">
            <select id="accommodation" style="width: 100%;" >
            <option value="2">Common: 2gp</option>
            <option value="10" selected>Average: 10gp</option>
            <option value="50">Fancy: 50gp (+1 CHA)</option>
            </select>
          </div>
    `;
  }

  const numericalOptions = function (id, start, end) {
    let options = ``;

    for (let i = start; i <= end; i++) {
        options += `<option value="${i}">${i}</option>`;
    }

    return `
        <select id="${id}" style="width: 100%;" >
          ${options}
          </select>
      `;
  }

  NJH.dialog.downtimeCarousing = async function () {
    const content = `
        <div  style="display: grid; grid-template-columns: repeat(2, 1fr); padding: 5px 0;">
          <div style="padding: 5px 0 0 10px; font-weight: bold;"># of HD wagered:</div>
          <div style="padding: 5px 0 0 10px;">
            ${numericalOptions('carousing', 1, 14)}
          </div>
          ${accommodation()}
        </div>
      `;


    new Dialog({
      title: 'Carousing',
      content: content,
      buttons: {
        submit: {
          label: 'Submit',
          callback: async (html) => {
            const accom = html.find('#accommodation')[0].value;
            const hp = new Roll(`5d3`)._evaluateSync().total;
            const hitDie = html.find('#carousing')[0].value;
            const carousing = new Roll(`${hitDie}d6`)._evaluateSync().total;

            const extraHtml = `
              <div style="margin: 10px 0 10px 0; border-bottom: 1px solid var(--color-underline-header);"></div>
              <div class="card-buttons">
                <button data-action="save" data-save="death">
                Make a save vs poison
                </button>
              </div>
              `;


            const cost = parseInt(accom) + (carousing * 20);
            const message = `Gain ${carousing * 20 * 5}xp!! (Roll: ${carousing})`;

            const content = NJH.chatMessage.downtimeResult("Carousing", message, cost, hp, extraHtml);

            ChatMessage.create({ content: content });
          }
        },
        close: {
          label: 'Cancel'
        }
      }
    }).render(true);
  }

  NJH.dialog.downtimeTraining = async function (title, placeholder, roll, threshold) {
    const content = `
        <div  style="display: grid; grid-template-columns: repeat(2, 1fr); padding: 5px 0;">
          <div style="padding: 5px 0 0 10px; font-weight: bold;">What?</div>
          <div style="padding: 5px 0 0 10px;">
            <input type="text" id="train" name="train" placeholder="E.g. ${placeholder}">
          </div>
          <div style="padding: 5px 0 0 10px; font-weight: bold;">Roll</div>
          <div style="padding: 5px 0 0 10px;">
            <input type="text" id="roll" name="roll" placeholder="E.g. ${roll}" value="1d100">
          </div>
          <div style="padding: 5px 0 0 10px; font-weight: bold;">Success Threshold %</div>
          <div style="padding: 5px 0 0 10px;">
            <input type="text" id="threshold" name="threshold" placeholder="E.g. ${threshold}">
          </div>
          <div style="padding: 5px 0 0 10px; font-weight: bold;">Cost</div>
          <div style="padding: 5px 0 0 10px;">
            <input type="text" id="cost" name="cost" placeholder="Cost">
          </div>
          ${accommodation()}
        </div>
      `;

    new Dialog({
      title: title,
      content: content,
      buttons: {
        submit: {
          label: 'Submit',
          callback: async (html) => {
            const rollVal = html.find('#roll')[0]?.value;
            const trainingCost = html.find('#cost')[0]?.value;
            const thresholdVal = html.find('#threshold')[0]?.value;
            let placeholderVal = html.find('#train')[0]?.value;
            
            if (rollVal !== '1d100') {
              return;
            }

            if (trainingCost.match(/[0-9]*/)[0] === '') {
              return
            }

            if (thresholdVal.match(/[0-9]*/)[0] === '') {
              return
            }

            if ((placeholderVal.match(/[0-9a-z-A-Z]+/) ?? [''])[0] === '') {
              placeholderVal = 'TRAINING';
            }

            const accom = html.find('#accommodation')[0].value;
            const hp = new Roll(`5d3`)._evaluateSync().total;

            const training = new Roll(`${rollVal}`)._evaluateSync().total;

            const trainingResult = training <= thresholdVal ? `
            <div class="ose chat-block" style="margin: 10px;" >
            <div class="roll-result roll-success"><b>Success</b>(${training}) vs ${thresholdVal}</div></div>` : `
            <div class="ose chat-block" style="margin: 10px;" >
            <div class="roll-result roll-fail"><b>Failure</b> (${training}) vs ${thresholdVal}
            </div></div>`;

            const cost = parseInt(accom) + parseInt(trainingCost);

            const content = NJH.chatMessage.downtimeResult(title, placeholderVal, cost, hp, trainingResult);

            ChatMessage.create({ content: content });
          }
        },
        close: {
          label: 'Cancel'
        }
      }
    }).render(true);
  };

  NJH.dialog.downtimeSkills = async function () {
    const options = [
      { cost: 5, threshold: 50, label: '3-6 (5gp, 50%)' },
      { cost: 10, threshold: 40, label: '7-8 (10gp, 40%)' },
      { cost: 20, threshold: 30, label: '9-11 (20gp, 30%)' },
      { cost: 100, threshold: 20, label: '12-14 (100gp, 20%)' },
      { cost: 500, threshold: 10, label: '15-16 (500gp, 10%)' },
      { cost: 1000, threshold: 5, label: '17 (1000gp, 5%)' },
    ];

    let optionsMarkup = ``;
    for(let i = 0; i < options.length; i++) {
      optionsMarkup += `<option value="${i}">${options[i].label}</option>`;
    }

    const content = `
        <div  style="display: grid; grid-template-columns: repeat(2, 1fr); padding: 5px 0;">
          <div style="padding: 5px 0 0 10px; font-weight: bold;">Skill:</div>
          <div style="padding: 5px 0 0 10px;">
            <select id="train" style="width: 100%;" >
              <option value="SEL">Select ...</option>
              <option value="STRENGTH">STR</option>
              <option value="INTELLIGENCE">INT</option>
              <option value="WISDOM">WIS</option>
              <option value="DEXTERITY">DEX</option>
              <option value="CONSTITUTION">CON</option>
              <option value="CHARISMA">CHA</option>
            </select>
          </div>
          <div style="padding: 5px 0 0 10px; font-weight: bold;">Current Skill Level:</div>
          <div style="padding: 5px 0 0 10px;">
            <select id="skillTraining" style="width: 100%;" >
              ${optionsMarkup}
            </select>
          </div>
          ${accommodation()}
        </div>
      `;

    new Dialog({
      title: 'Skill Training',
      content: content,
      buttons: {
        submit: {
          label: 'Submit',
          callback: async (html) => {
            const stat = html.find('#train')[0]?.value;
            if(stat === 'SEL') {
              return;
            }

            const accom = html.find('#accommodation')[0].value;
            const hp = new Roll(`5d3`)._evaluateSync().total;
            const skillTrainingIndex = html.find('#skillTraining')[0].value;

            const training = new Roll(`1d100`)._evaluateSync().total;
            const thresholdVal =  parseInt(options[skillTrainingIndex].threshold);


            const trainingResult = training <= thresholdVal ? `
            <div class="ose chat-block" style="margin: 10px;" >
            <div class="roll-result roll-success"><b>Success</b>(${training}) vs ${thresholdVal}</div></div>` : `
            <div class="ose chat-block" style="margin: 10px;" >
            <div class="roll-result roll-fail"><b>Failure</b> (${training}) vs ${thresholdVal}
            </div></div>`;

            const cost = parseInt(accom) + parseInt(options[skillTrainingIndex].cost);


            const content = NJH.chatMessage.downtimeResult('Skill Training', `TRAIN ${stat}`, cost, hp, trainingResult);

            ChatMessage.create({ content: content });
          },
        },
        close: {}
      }
    }).render(true);
  }


  NJH.dialog.downtimeDefault = async function (title, message) {
    const content = `
        <div  style="display: grid; grid-template-columns: repeat(2, 1fr); padding: 5px 0;">
          ${accommodation()}
        </div>
      `;
    new Dialog({
      title: title,
      content: content,
      buttons: {
        submit: {
          label: 'Submit',
          callback: async (html) => {
            const accom = html.find('#accommodation')[0].value;
            const hp = new Roll(`5d3`)._evaluateSync().total;

            const cost = parseInt(accom);

            ChatMessage.create({ content: NJH.chatMessage.downtimeResult(title, message, cost, hp) });
          }
        },
        close: {
          label: 'Cancel'
        }
      }
    }).render(true);
  }
}