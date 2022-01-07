$(() => {
  DevExpress.setTemplateEngine('underscore');

  $('#treeview').dxTreeView({
    dataSource: exchanges,
    selectionMode: 'single',
    selectByClick: true,
    onItemSelectionChanged(e) {
      showCountryData(e.itemData);
    },
  });

  const tabPanel = $('#tabpanel').dxTabPanel({
    animationEnabled: true,
    itemTitleTemplate: $('#title'),
    itemTemplate: $('#coins-template'),
    
  }).dxTabPanel('instance');

  showCountryData(exchanges[0].items[0]);

  function showCountryData(data) {
   // const citiesData = data.action[0]['cities'];
   const coinData = data.action;

    if (coinData) {
      //info exchange
      $('#exchange-flag').attr('src', data.flag);
      $('#full-exchange-name').text(data.fullName);
      $('#exchange-description').text(data.description);
      //info
      
      console.log(data.update);
     

      tabPanel.option('dataSource', coinData);
      tabPanel.option('selectedIndex', 0);
    }
  }
});
