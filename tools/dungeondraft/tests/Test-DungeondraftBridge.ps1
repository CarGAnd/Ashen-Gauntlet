param([string]$BridgeHost = "127.0.0.1", [int]$BridgePort = 8787)

$ErrorActionPreference = "Stop"

If($BridgeHost -ne "127.0.0.1")
{
    throw "This project smoke test only permits the loopback endpoint 127.0.0.1."
}

$requests = @(
    @{ cmd = "ping"; id = "ashen-gauntlet-ping" },
    @{ cmd = "get_status"; id = "ashen-gauntlet-status" }
)

foreach($request in $requests)
{
    $client = [System.Net.Sockets.TcpClient]::new()
    $client.ReceiveTimeout = 5000
    $client.SendTimeout = 5000

    try
    {
        $client.Connect($BridgeHost, $BridgePort)
        $stream = $client.GetStream()
        $writer = [System.IO.StreamWriter]::new($stream, [System.Text.UTF8Encoding]::new($false), 1024, $true)
        $reader = [System.IO.StreamReader]::new($stream, [System.Text.Encoding]::UTF8, $false, 1024, $true)
        $writer.NewLine = "`n"
        $writer.WriteLine(($request | ConvertTo-Json -Compress))
        $writer.Flush()
        $responseLine = $reader.ReadLine()

        If([string]::IsNullOrWhiteSpace($responseLine))
        {
            throw "The bridge returned an empty response for $($request.cmd)."
        }

        $response = $responseLine | ConvertFrom-Json

        If($response.ok -eq $false)
        {
            throw "The bridge rejected $($request.cmd): $($response.error)"
        }

        Write-Output "$($request.cmd): PASS"
        $response.result | ConvertTo-Json -Depth 10
    }
    finally
    {
        $client.Dispose()
    }
}
