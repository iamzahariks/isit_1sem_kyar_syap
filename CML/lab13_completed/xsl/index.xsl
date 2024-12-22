<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<head>
<title>Сайт XSL</title>
</head>
<body style="background-color: palegoldenrod">
    <div style="position: fixed; width: 100%; height: 100%; display: flex; align-items: center; flex-flow: row wrap; justify-content: space-evenly">
    <xsl:for-each select="body/list/item">
        <xsl:sort data-type="number" order="ascending" select="@cost"/>
            <div style="position: relative; width: 250px; min-height: 500px; border-radius: 15px; border: 4px solid black; background-color: rgb(43,206,255)">
                <xsl:variable name="price"><xsl:value-of select="cost"/></xsl:variable>
                <xsl:choose>
                    <xsl:when test="$price='$1,49'">
                        <img src="../imgs/apple.png" style="display: block; background-repeat: no-repeat; background-size: cover; width: 80%; 
                            aspect-ratio: 1; margin: 0 auto; margin-top: 5px; border-radius: 40px; border: 2px solid black;"/>
                    </xsl:when>
                    <xsl:when test="$price='$299'">
                        <img src="../imgs/guitar.png" style="display: block; background-repeat: no-repeat; background-size: cover; width: 80%; 
                            aspect-ratio: 1; margin: 0 auto; margin-top: 5px; border-radius: 40px; border: 2px solid black;"/>
                    </xsl:when>
                    <xsl:when test="$price='$99'">
                        <img src="../imgs/kedi.png" style="display: block; background-repeat: no-repeat; background-size: cover; width: 80%; 
                            aspect-ratio: 1; margin: 0 auto; margin-top: 5px; border-radius: 40px; border: 2px solid black;"/>
                    </xsl:when>
                    <xsl:when test="$price='$399'">
                        <img src="../imgs/smartphone.png" style="display: block; background-repeat: no-repeat; background-size: cover; width: 80%; 
                            aspect-ratio: 1; margin: 0 auto; margin-top: 5px; border-radius: 40px; border: 2px solid black;"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <img src="../imgs/cover.png" style="display: block; background-repeat: no-repeat; background-size: cover; width: 80%; 
                            aspect-ratio: 1; margin: 0 auto; margin-top: 5px; border-radius: 40px; border: 2px solid black;"/>
                    </xsl:otherwise>
                </xsl:choose>
                <p style="display: block; color: green; text-align: center; font-size: 64px; margin: 0 auto; margin-top: 5px;"><xsl:value-of select="cost"/></p>
                <p style="display: block; color: rgb(195, 255, 99); text-align: center; font-size: 24px;"><xsl:value-of select="description"/></p>
            </div>
    </xsl:for-each>
    </div>
</body>
</html>
</xsl:template>
</xsl:stylesheet>