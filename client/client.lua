-- Open NUI

RegisterCommand('opennui', function()
  SetNuiFocus(true, true)
  SendNUIMessage({ type = 'open' })
end)

RegisterKeyMapping('opennui', 'Close my NUI', 'keyboard', 'ESCAPE')

-- Close NUI

local function closeNUI()
  SetNuiFocus(false, false)
  SendNUIMessage({ type = 'close' })
end

RegisterNUICallback('close', function()
  closeNUI()
end)